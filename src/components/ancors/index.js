import React from 'react';
import { AncorsList, Ancor } from './styles';
import { Link } from 'react-router-dom';
import theme from '../../global/styles/theme';

const Ancors = ({ ancors }) => {

    return (
        <AncorsList>
            {
                ancors.map(ancor => {
                    return ancor.href
                        ?
                        <Link to={ancor.href} key={`${ancor.name}${Date.now()}`}>
                            <Ancor>{ancor.name} / </Ancor>
                        </Link>
                        :
                        <Ancor
                            style={{ 
                                pointerEvents: 'none', 
                                color: theme.primaryGrey,
                                marginBottom: '-1px'

                            }}
                            key={`${ancor.name}${Date.now()}`}>
                            {`${ancor.name}`}
                        </Ancor>
                })
            }
        </AncorsList>
    )
}

export default Ancors;