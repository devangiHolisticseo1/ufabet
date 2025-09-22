/**
 * Get the base URL for the application
 * Returns the appropriate URL based on the environment
 */
export function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://www.ufabet.com';
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ufabet.com';
}

/**
 * Generate a canonical URL for a given path
 * @param {string} path - The path to append to the base URL
 * @returns {string} The complete canonical URL
 */
export function getCanonicalUrl(path = '/') {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate Open Graph URL
 * @param {string} path - The path to append to the base URL
 * @returns {string} The complete URL for Open Graph
 */
export function getOpenGraphUrl(path = '/') {
  return getCanonicalUrl(path);
}