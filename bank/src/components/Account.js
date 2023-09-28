import AccountItem from '../components/AccountItem';

const Account = () => {
    return (
        <div>
            <h2 className="sr-only">Accounts</h2>
            <AccountItem
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <AccountItem
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <AccountItem
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </div>
    )
}
export default Account