import { CommonComponentProps } from "../interface";

export interface ContainerProps extends CommonComponentProps {

}

const Container = ({ children, styles }: ContainerProps) => {

    return (
        <div 
            style={styles}
            className={`p-[20px]`}
        >{children}</div>
    )
}

export default Container;
