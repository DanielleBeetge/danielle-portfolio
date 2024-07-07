export default function AppLogo() {
    return (
<section class="worklogo">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-3 py-4">
                <div>
                    <img class="imglogo" src={ require('../assets/images/Flint-Logo.png')} />
                </div>
            </div>
            <div class="col-lg-3 py-4">
                <div>
                    <img class="imglogo" src={ require('../assets/images/Vega-Logo.png')} />
                </div>
            </div>
            <div class="col-lg-3 py-4">
                <div>
                    <img class="imglogo" src={ require('../assets/images/BWD-logo.png')} />
                </div>
            </div>
            <div class="col-lg-3 py-4">
                <div>
                    <img class="imglogo" src={ require('../assets/images/AdaptIT-Logo.png')} />
                </div>
            </div>
        </div>
    </div>
</section>
    )
}