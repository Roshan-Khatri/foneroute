// Sanity environment config and validation

export interface SanityConfig {
	projectId: string;
	dataset: string;
	apiVersion: string;
	useCdn: boolean;
	token?: string;
  }
  
  export interface SanityConfigStatus {
	isConfigured: boolean;
	missing: string[];
	config?: SanityConfig;
  }
  
  function isPlaceholderValue(value?: string): boolean {
	if (!value) return true;
	return /^(your-.+-here|<.*>|\[.*\])$/i.test(value);
  }
  
  export function validateSanitySetup(): SanityConfigStatus {
  
	const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
	const dataset = import.meta.env.VITE_SANITY_DATASET;
	const apiVersion =
	  import.meta.env.VITE_SANITY_API_VERSION || "2023-01-01";
	const useCdn =
	  import.meta.env.VITE_SANITY_USE_CDN === "true";
	const token =
	  import.meta.env.VITE_SANITY_API_TOKEN;
  
	const missing: string[] = [];
  
	if (!projectId || isPlaceholderValue(projectId)) {
	  missing.push("VITE_SANITY_PROJECT_ID");
	}
  
	if (!dataset || isPlaceholderValue(dataset)) {
	  missing.push("VITE_SANITY_DATASET");
	}
  
	if (!token || isPlaceholderValue(token)) {
	  missing.push("VITE_SANITY_API_TOKEN");
	}
  
	const isConfigured = missing.length === 0;
  
	const config = isConfigured
	  ? {
		  projectId,
		  dataset,
		  apiVersion,
		  useCdn,
		  token,
		}
	  : undefined;
  
	return {
	  isConfigured,
	  missing,
	  config,
	};
  }
  
  export function getSanityConfig(): SanityConfig | null {
	const status = validateSanitySetup();
  
	if (!status.isConfigured) {
	  if (import.meta.env.DEV && status.missing.length > 0) {
		console.warn(
		  `[Sanity] Missing environment variables: ${status.missing.join(", ")}`
		);
	  }
	  return null;
	}
  
	return status.config!;
  }
  
  export function isSanityConfigured(): boolean {
	return validateSanitySetup().isConfigured;
  }
  
  export function getSanityStatus(): SanityConfigStatus {
	return validateSanitySetup();
  }