import React from 'react';
import DCLanding from "./DCLanding";

async function action({ store = {}, fetch }, { contentId }) {

    // const args = [store.dispatch, store.getState, { fetch }];
    // await setRootLoaderView(true)(...args);
    // const apiFetchPromis = getGoldLandingData(contentId)(...args);
    // const apiLandingOnboardingData = getLandingOnboardingData(contentId)(...args);
    // const apiSellerFetchPromis = getSellerChipsData(contentId)(...args);
    
    // await Promise.all([apiFetchPromis,apiSellerFetchPromis,apiLandingOnboardingData]);
    // await setRootLoaderView(false)(...args);

    //const currentState = store.getState();
    //const movieContent = _.get(currentState, 'moviesData.movieContent', {});

    //debugger;
    return {
        component: (
            //<Layout>
                <DCLanding />
           // </Layout>
        ),
    };
}

export default action;
