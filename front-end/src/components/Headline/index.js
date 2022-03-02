/** @jsxImportSource theme-ui */
import { Text } from 'theme-ui';

const Headline = (props) => {
    return <Text variant={`styles.${props.scale}`} {...props} />
};

export default Headline;