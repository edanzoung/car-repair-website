import PropagateLoader from "react-spinners/PropagateLoader";
import './Loader.css';

export const Spinner = () => {
    let loading = true;
    let color = "#ff6f3dff";

    return (
        <div className="sweet-loading">
            <img style={{ width: 'auto', height: '150px',margin:'2em' }} src="/assets/car-gear_1.png" alt="img" />
            <PropagateLoader
                color={color}
                loading={loading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );

}