import '../css/Footer.css'; // Certifique-se de importar o arquivo CSS correto

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright &copy; {new Date().getFullYear()}: Todos os direitos reservados</p>
        </div>
    );
};

export default Footer;
