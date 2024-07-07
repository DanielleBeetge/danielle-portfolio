export default function AppFooter() {
    return (
<section data-scroll-index="4" id="contact" class="home-section bg-foot">
    <div class="container">
        <div class="row gy-5r">
            <div class="col-lg-6 pt-4 pb-4">
                <div>
                    <img src={ require('../assets/images/contact-bg.png')} alt="Design" />
                </div>
            </div>
            <div class="col-lg-5 ms-auto col-xl-4">
                <ul class="contact-infos">
                    <li>
                        <div class="icon bg-1">
                            <a href="tel:0825747745"><i class="bi bi-telephone-fill"></i></a>
                        </div>
                        <div class="col">
                            <h5>Phone</h5>
                            <p>082 574 7745</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-2">
                            <a href="mailto:dbeetge6@gmail.com"><i class="bi bi-envelope-fill"></i></a>
                        </div>
                        <div class="col">
                            <h5>Mail</h5>
                            <p>dbeetge6@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-4">
                          <a href="https://www.linkedin.com/in/danielle-beetge-797305ba/?originalSubdomain=za" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                        </div>
                        <div class="col">
                            <h5>See More</h5>
                            <p>Personal Profile</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-3">
                            <i class="bi bi-geo-alt-fill"></i>
                        </div>
                        <div class="col">
                            <h5>Located</h5>
                            <p>Ruimsig, Johannesburg, South Africa</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    )
}