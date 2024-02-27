import { ReactComponent as PasswordOn } from '../../assets/passwordOn.svg';
import { ReactComponent as PasswordOff } from '../../assets/passwordOff.svg';

interface Props {
    showPwd: boolean;
    onClick: () => void;
}

const TogglePasswordButton: React.FC<Props> = ({ showPwd, onClick }) => {
    return (
        <button
        type='button'
            onClick={onClick}
          >{
            showPwd ?
              (<PasswordOn/>)
              :
              (<PasswordOff/>)
            }
        </button>
    );
};

export default TogglePasswordButton;
