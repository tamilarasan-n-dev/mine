
import api from "./api.js";

const observerAPI = {
  /**
   * Track page visit
   * @param pageRoute - The route/path being visited
   */
  create: async (pageRoute) => {
    try {
      await api.post('/observer', {
        pageRoute,
      });
    } catch (error) {
      // Silently fail to not disrupt user experience
      console.debug('Observer API error:', error);
    }
  },
};

export default observerAPI;
