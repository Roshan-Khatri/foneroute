
import fs from 'fs/promises';
import path from 'path';

const pagesDir = path.resolve(process.cwd(), 'src/pages');
const outputFile = path.resolve(process.cwd(), 'src/lib/knowledge-base.json');

async function extractTextFromComponent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        // This is a simplified regex; a more robust solution would use a proper parser
        const textContent = content
            // Remove JSX tags
            .replace(/<[^>]+>/g, ' ')
            // Remove imports and exports
            .replace(/import\s+.*\s+from\s+['"].*['"];?/g, '')
            .replace(/export\s+default\s+\w+;/g, '')
            // Remove hooks and function definitions
            .replace(/use[A-Z]\w*\([^)]*\);?/g, '')
            .replace(/const\s+\w+\s+=\s+\([^)]*\)\s+=>\s+{/g, '')
            // Clean up extra whitespace
            .replace(/\s\s+/g, ' ')
            .trim();
        return textContent;
    } catch (error) {
        console.error(`Error reading or parsing ${filePath}:`, error);
        return null;
    }
}

async function buildKnowledgeBase() {
    try {
        const allFiles = await fs.readdir(pagesDir, { withFileTypes: true });
        const pageFiles = allFiles
            .filter(dirent => dirent.isFile() && dirent.name.endsWith('.tsx'))
            .map(dirent => path.join(pagesDir, dirent.name));

        const knowledgeBase = {};

        for (const file of pageFiles) {
            const textContent = await extractTextFromComponent(file);
            if (textContent) {
                const pageName = path.basename(file, '.tsx');
                knowledgeBase[pageName] = textContent;
            }
        }

        await fs.writeFile(outputFile, JSON.stringify(knowledgeBase, null, 2));
        console.log(`Knowledge base created at ${outputFile}`);

    } catch (error) {
        console.error('Error building knowledge base:', error);
    }
}

buildKnowledgeBase();
