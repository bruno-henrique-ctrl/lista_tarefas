const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-sm">

                <div className="text-orange-500 font-semibold text-center sm:text-left">
                    Lista de Tarefas
                </div>

                <div className="text-center">
                    &copy; {currentYear} Lista de Tarefas. Todos os direitos reservados.
                </div>

                <div className="text-center sm:text-right">
                    Feito por mim para mim kkkk
                </div>

            </div>
        </footer>
    );
};

export default Footer;