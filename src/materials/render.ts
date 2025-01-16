import React from "react";
import { ActionType, Component } from "./interface";
import { MaterialConfigs } from "./interface";
import { message } from "antd";

function handleEvent(component: Component, componentRefs: React.MutableRefObject<Record<string, any>>) {
    const props: Record<string, any> = {}

    MaterialConfigs[component.name].events?.forEach((event) => {
        const eventConfig = component.props[event.name];

        if (eventConfig) {
            props[event.name] = (...args: any[]) => {
                eventConfig?.actions?.forEach((action: ActionType) => {
                    if (action.type === 'goToLink') {
                        window.location.href = action.url;
                    } else if (action.type === 'showMessage') {
                        if (action.config.type === 'success') {
                            message.success(action.config.text);
                        } else if (action.config.type === 'error') {
                            message.error(action.config.text);
                        }
                    } else if (action.type === 'customJS') {
                        const func = new Function('context', 'args', action.code);
                        func({
                            name: component.name,
                            props: component.props,
                            showMessage(content: string) {
                                message.success(content)
                            }
                        }, args);
                    } else if (action.type === 'componentMethod') {
                        const component = componentRefs.current[action.config.componentId];

                        if (component) {
                            component[action.config.method]?.(...args);
                        }
                    }

                })

            }
        }
    })
    return props
}

function renderComponents(components: Component[],componentRefs: React.MutableRefObject<Record<string, any>>): React.ReactNode {
    return components.map((component: Component) => {
        const config = MaterialConfigs?.[component.name]

        if (!config?.prod) {
            return null;
        }

        return React.createElement(
            config.prod,
            {
                key: component.id,
                id: component.id,
                name: component.name,
                styles: component.styles,
                ref: (ref: Record<string, any>) => { componentRefs.current[component.id] = ref },
                ...config.defaultProps,
                ...component.props,
                ...handleEvent(component,componentRefs)  // 添加事件
            },
            renderComponents(component.children || [],componentRefs)
        )
    })
}

export {
    renderComponents
}