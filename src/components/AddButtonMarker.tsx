import useAddMarker from "../customHooks/useAddMarker";

interface Props {}

const AddMarkerButton: React.FC<Props> = (props) => {
    const addMarker = useAddMarker(false);

    return <button onClick={() => addMarker.doActivate(!addMarker.activate)}>Add Points</button>
}

export default AddMarkerButton;