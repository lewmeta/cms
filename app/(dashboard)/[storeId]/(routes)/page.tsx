interface DashboardProps {
    params: {
        storeId: string;
    }
}


const Dashboard: React.FC<DashboardProps> = async ({
    params
}) => {

    return (
        <div>Future Dashboard</div>
    )
}

export default Dashboard