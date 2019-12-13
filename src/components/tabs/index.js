import React, { useState, useEffect } from 'react';

import { Tabs, TabsList, Tab, Indicator, TabsPanels } from './styles';

const NavigationTabs = ({ tabs = [], panels = [], styles = {} }) => {

    const generateClassName = () => `tab__${(Math.random() * tabs.length).toString().replace('.', '')}`;

    const [_tabs, setTabs] = useState([]);
    const [_tabClass] = useState(generateClassName());
    const [targetWidth, setTargetWidth] = useState(0);
    const [indicatorPosition, setIndicatorPosition] = useState(10);

    const [error, setError] = useState('');

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (tabs.length !== panels.length) {
            setError('the number of tabs and panels should be the same');
        }
    }, [tabs, panels]);

    useEffect(() => {
        const tabsArray = document.querySelectorAll(`.${_tabClass}`);
        const offsetTabWidth = tabsArray[0].offsetWidth;

        setTabs(tabsArray);
        setTargetWidth(offsetTabWidth);
    }, [_tabClass]);

    useEffect(() => {

        setIndicatorPosition(_tabs[0]?.offsetLeft);

        // eslint-disable-next-line
        const attr = _tabs[0]?.setAttribute('style', 'color: ' + styles.activeTabColor + '; font-weight: ' + styles.activeTabFontWeight);

        _tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                const targetWidth = e.target.offsetWidth;

                setCurrentIndex(index);
                setTargetWidth(targetWidth);
                setIndicatorPosition(e.target.offsetLeft);

                _tabs.forEach(tab => {
                    // eslint-disable-next-line
                    const attr = tab?.setAttribute('style', 'color: ' + styles.tabColor + '; font-weight: ' + styles.fontWeight);
                });

                // eslint-disable-next-line
                const attr = e.target?.setAttribute('style', 'color: ' + styles.activeTabColor + '; font-weight: ' + styles.activeTabFontWeight);
            });
        })
        // eslint-disable-next-line
    }, [_tabs]);

    return (

        error ? console.error(`Error: ${error}`) :
            <Tabs
                width={styles.tabsWidth}
                border={styles.tabsBorder}
                borderTop={styles.tabsBorderTop}
                borderBottom={styles.tabsBorderBottom}
                borderRight={styles.tabsBorderRight}
                borderLeft={styles.tabsBorderLeft}
            >
                <TabsList
                    border={styles.tabListBorder}
                    borderTop={styles.tabListBorderTop}
                    borderBottom={styles.tabListBorderBottom}
                    borderRight={styles.tabListBorderRight}
                    borderLeft={styles.tabListBorderLeft}
                >
                    <Indicator
                        width={targetWidth}
                        left={indicatorPosition}
                        height={styles.indicatorHeight}
                        color={styles.indicatorColor}
                        transition={styles.indicatorTransition}
                    />
                    {
                        tabs.map(((tab, index) => {
                            return (
                                <Tab
                                    key={index}
                                    className={_tabClass}
                                    color={styles.tabColor}
                                    gap={styles.gap}
                                    padding={styles.tabPadding}
                                    transition={styles.tabTransition}
                                    background={styles.tabBackground}
                                    hoverColor={styles.tabHoverColor}
                                    hoverBackground={styles.tabHoverBackground}
                                    fontSize={styles.fontSize}
                                    fontWeight={styles.fontWeight}
                                >
                                    {tab}
                                </Tab>
                            )
                        }))
                    }
                </TabsList>
                <TabsPanels>
                    {panels[currentIndex]}
                </TabsPanels>
            </Tabs>
    )
}

export default NavigationTabs;