import Button from './Button';

const Header = (props) =>{
    return(
        <div className='header'>
            <h1>{props.title}</h1>
            <Button />
        </div>
    )
};export default Header;

