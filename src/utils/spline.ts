export async function preloadSplineScene(splineUrl: string): Promise<boolean> {
  try {
    const response = await fetch(splineUrl);
    if (!response.ok) {
      throw new Error(`Failed to load Spline scene: ${response.statusText}`);
    }
    
    const data = await response.json();
    return 'scene' in data;
  } catch (error) {
    console.error('Spline preloading error:', error);
    return true; // Continue anyway to prevent blocking
  }
}