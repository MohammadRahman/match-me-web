import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../hooks/useLogOut";
import ButtonIcon from "../../shared/components/button-icon/ButtonIcon";


function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;