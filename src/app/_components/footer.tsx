

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className=" text-center flex items-center justify-center px-2 flex-col border-t-2 p-2">
            Luis Albarran Develop | Todos los derechos reservados &copy; {year}
        </footer>
    );
}