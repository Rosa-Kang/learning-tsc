{
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        state: 'fail';
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printLoginState(param:ResourceLoadState){
        switch (param.state) {
            case 'fail':
                console.log(`🫥  ${param.reason}`);
                break;
            case 'loading':
                console.log(`😏 loading..`);
                break;
            case 'success':
                console.log(`🙃 ${param.response.body}`);
                break;
            default:
                throw new Error(`unknown state: ${param}`)
        }
    }

    printLoginState({ state: 'loading' });
    printLoginState({ state: 'success', response:{body:'loaded'} });
    printLoginState({ state: 'fail', reason:'no network'});
}