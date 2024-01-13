import Button from './Button';


const Header = (props) =>{
    
    return(
        <div className='header'>
            <p className='profile-name'>{props.name}</p>
            <h1 className='header-title'>{props.title}</h1>
            <Button />
        </div>
    )

   
};export default Header;

