import api from "./../utils/api";

export async function checkAuthStatus(req) {
  try {
    // Make a request to your authentication endpoint or API to check the authentication status
    const response = await api.get("/auth/get-current_user", {
      headers: {
        // Include any necessary headers, tokens, or cookies for authentication
        // For example, you can pass the request headers from the middleware
        Cookie: req.headers.cookie,
      },
    });

    // Return the user object if authenticated
    return response.data.data;
  } catch (error) {
    console.log(error);
    // Handle authentication error
    // throw new Error("Unauthorized");
  }
}
