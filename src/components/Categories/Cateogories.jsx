import React, { useState } from 'react'
import { Categorie, CategoriesContainer, CategoriesContainerStyled, CategoriesTitle, CategoriesWrapper } from './Categories'
import { FaArrowRight, FaArrowLeft   } from "react-icons/fa";
import CategoriesOpener from './CategoriesOpener';
import { AnimatePresence } from 'framer-motion';

export const Cateogories = () => {

    const [openCategories, setOpenCategories] = useState(false);

    const handleOpenCategories = () => {
        setOpenCategories(!openCategories)
    }

return (
    <> 
        <AnimatePresence>
        {
            !openCategories && (
        <CategoriesContainerStyled
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: -1000, opacity: 0 }}
        transition={{ type: "spring", damping: 27 }}
        key="menu-categories"
        >
            <CategoriesWrapper>
                <CategoriesTitle>
                    <FaArrowLeft
                    onClick={handleOpenCategories}
                    />
                    <h3>Categorias</h3>
                </CategoriesTitle>
                <CategoriesContainer>
                    <Categorie>
                        <a href="">Almacen</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Fiambres y quesos</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Lacteos</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Panadería</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Kiosco</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Limpieza</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Perfumeria</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Envases</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Bazar</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Frescos</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Sandwicheria</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Otros</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Jugueteria</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Bebidas</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Libreria</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Promocion</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Accesorios</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Apotheke</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Coleccionables</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Cigarrillos</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Tabaqueria</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Helados</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Ocio</a>
                        <FaArrowRight/>
                    </Categorie>
                    <Categorie>
                        <a href="">Servicios</a>
                        <FaArrowRight/>
                    </Categorie>
                </CategoriesContainer>
            </CategoriesWrapper>
        </CategoriesContainerStyled>
        )}
        {
            openCategories && (
                <CategoriesOpener 
                onClick={handleOpenCategories}/>
            )
        }

        </AnimatePresence>
    </>
)
}
