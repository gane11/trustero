export const localHostUrl =
  process.env.REACT_APP_IMAGE_URL || "http://localhost:8080";
export const baseUrl = process.env.REACT_APP_BASEURL || `${localHostUrl}/api`;
