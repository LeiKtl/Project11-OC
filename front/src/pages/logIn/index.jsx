import './logIn.css';
import Form from '../../components/form';

function LogIn () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
            </section>
        </main>
    )
}

export default LogIn;