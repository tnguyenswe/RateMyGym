/** @jsxImportSource theme-ui */
import SingleCard from './SingleCard';
import React from 'react';
import { Grid } from 'theme-ui';

const CardsData = [
    {
        gymName: '24 Hour Fitness',
        gymAddress: '1531 Parkmoor Ave, San Jose CA 95128',
        background: 'https://www.ocregister.com/wp-content/uploads/2017/11/rt_24hrfullerton-27sm.jpg',
        primary: 'https://pbs.twimg.com/profile_images/1032411070000816128/4PDonjr6_400x400.jpg',
    },
    {
        gymName: 'Anytime Fitness',
        gymAddress: '2718 Homestead Rd, Santa Clara, CA 95050',
        background: 'https://cdn2.creativecirclemedia.com/crawfordsville/original/20200724-165408-NEW%20Anytime%201%20072520.tif.jpg',
        primary: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjcF_IAYu9uWCjUJD9yHn7134qJ7NDTSigg&usqp=CAU'
    },
    {
        gymName: 'Equinox',
        gymAddress: '440 Portage Ave, Palo Alto, CA 94306',
        background: 'https://www.dspelectric.com/upload/portf-web_1607336267.jpg',
        primary: 'https://cdn.dribbble.com/users/96260/screenshots/4207756/media/ddd0ba889b1368f399095211489b5b72.png?compress=1&resize=400x300&vertical=top'
    }
];

const PreviewCards = () => {

    return (
        <Grid sx={{maxWidth: '90%', gridTemplateColumns: ['1fr', '1fr 1fr', null, '1fr 1fr 1fr'], gridColumnGap: ['10px','30px', null,'50px'], gridRowGap: ['20px', '20px']}}>
            {
                CardsData.map((data, i) => {
                    return (<SingleCard
                        key={i}
                        gymAddress={CardsData[i].gymAddress}
                        creatorLink={CardsData[i].creatorLink}
                        gymName={CardsData[i].gymName}
                        background={CardsData[i].background}
                        primary={CardsData[i].primary} />);
                }
                )
            }
        </Grid>
    );
}

export default PreviewCards;