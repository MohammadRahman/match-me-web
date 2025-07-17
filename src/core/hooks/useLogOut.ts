
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
const logout = null;
const isLoading = false;

  return { logout, isLoading };
}