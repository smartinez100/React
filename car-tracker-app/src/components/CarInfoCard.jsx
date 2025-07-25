export default function CarInfoCard({ make, milage }) {
    return (
        <div>
            <h3>{make}</h3>
            <p>Milage: {milage} miles</p>
        </div>
    )
}