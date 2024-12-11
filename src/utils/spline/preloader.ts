import { SPLINE_SCENE_URL } from '../../config/constants';

export async function preloadSplineScene(): Promise<boolean> {
  try {
    const response = await fetch(SPLINE_SCENE_URL);
    if (!response.ok) {
      throw new Error(`Failed to load Spline scene: ${response.statusText}`);
    }
    
    // Just checking if we can reach the URL is sufficient
    // We don't need to parse the response as JSON
    return true;
  } catch (error) {
    console.error('Spline preloading error:', error);
    return true; // Continue anyway to prevent blocking
  }
}