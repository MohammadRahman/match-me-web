
export function useLogin() {
  const login = function(email, password){
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (email && password) {
          resolve({ success: true });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };
  const isLoading = false;

  return { login, isLoading };
}