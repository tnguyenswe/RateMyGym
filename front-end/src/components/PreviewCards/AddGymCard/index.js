/** @jsxImportSource theme-ui */
import { Flex, Image, Text } from 'theme-ui';
import Headline from '../../Headline';
import { Link } from 'react-router-dom';

const CardHref = (props) => (<Link {...props} to={`/addGym`} state={{ reviewURL: props.reviewURL, gymName: props.gymName, background: props.background, primary: props.primary, gymAddress: props.gymAddress }} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Link>)

const CardLayout = (props) => (<Flex {...props} sx={{ justifySelf: 'center', width: ['280px', '260px', '280px', '300px'], height: '325px', borderRadius: '10px', flexDirection: 'column', border: '2px solid #3e4451', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({ background, ...props }) => (<Image src={background} sx={{ maxWidth: ['280px', '260px', '280px', '300px'], height: '150px', width: '100%', objectFit: 'cover' }} />)

const PrimaryImage = ({ primary, ...props }) => (<Image src={primary} sx={{ alignSelf: 'center', position: 'relative', mt: '-65px', width: '110px', height: '110px', objectFit: 'cover', borderRadius: '50%' }} />)

const TextContainer = (props) => (<Flex {...props} sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: '10px' }}>{props.children}</Flex>)

const AddGymCard = ({ gymName, background, primary, gymAddress, creatorLink, reviewURL, ...rest }) => {
    return (
        <CardHref reviewURL={reviewURL} gymName={gymName} background={background} primary={primary} gymAddress={gymAddress}>
            <CardLayout {...rest}>
                <CardBackground background={background} />
                <PrimaryImage primary={primary} />
                <TextContainer>
                    <Headline sx={{ pb: '10px', maxWidth: '200px', textAlign: 'center', fontSize: [3, 2, 3], fontWeight: '600' }}>{gymName}</Headline>
                    <Flex sx={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', justifySelf: 'center' }}>
                        <Text sx={{ color: theme => theme.mainColors.blue50, pr: '2px', fontSize: [2, 1, 2], fontWeight: '600', maxWidth: '200px', textAlign: 'center' }}>{gymAddress}</Text>
                    </Flex>
                </TextContainer>
            </CardLayout>
        </CardHref>
    )
}

export default AddGymCard