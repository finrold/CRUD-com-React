import './Footer.css'
import React from 'react'

import { FaReact } from 'react-icons/fa'

export default props =>
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fab fa-react"></i> por 
            <strong> <FaReact /> Gésner Almeida</strong>
        </span>
    </footer>