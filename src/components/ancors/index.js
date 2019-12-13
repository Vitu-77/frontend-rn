import React from 'react';
import { AncorsList, Ancor } from './styles';

const Ancors = ({ ancors }) => {

    return (
        <AncorsList>
            {
                ancors.map(ancor => {
                    return ancor.href
                        ? <Ancor key={ancor.name} href={ancor.href}>{ancor.name} /</Ancor>
                        : <Ancor key={ancor.name} href={ancor.href}>{`  ${ancor.name}`}</Ancor>
                })
            }
        </AncorsList>
    )
}

export default Ancors;