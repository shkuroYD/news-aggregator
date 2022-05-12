interface IProps {
    text: string
}

export const Task = (props: IProps) => {
    const { text } = props;

    return (
        <div>
            { text }
        </div>
    );
}