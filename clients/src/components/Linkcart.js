import React from "react";

export const Linkcart = ({ link }) => {
    return (
        <>
            <h2>Силка</h2>
            <p>Ваши силка: <a target='_blank' rel="noopener noreferrer"  href={link.to}>{ link.to }</a></p>
            <p>Звітки: <a target='_blank' rel="noopener noreferrer" href={link.from}>{ link.from }</a></p>
            <p>К-сть кліків по силці: <strong>{ link.clicks }</strong></p>
            <p>Дата створення: <strong>{ new Date(link.date).toLocaleDateString() }</strong></p>


        </>
    )
}
