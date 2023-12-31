import Testimony from '../components/carouseltestimony'
import Footer from '../components/footer'
import Carouselteam from '../components/carouselteam'

export default function Team () {
  return (
    <>
      <div className=' pt-[80px]  wraperitem'>
        <section
          className=' jumbotron breadcumb relative  h-[50vh]  object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${'/src/assets/img/team.jpg'})`
          }}
        >
          <div>
            <div className=' pt-[80px]   w-full    text-center flex justify-center items-center text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <h1 className='text-center '>About Our Team</h1>
            </div>

            <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '>
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span>Team</span>
            </div>
          </div>
        </section>

        <section className='container-fluid black pb-0'>
          <div className='row m-10-hor'>
            <div className=' p-md-5 mb-16'>
              <div className='heading'> About Our Team</div>

              <div>
                Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor
                justo sed mi finibus, vel tristique risus faucibus. Curabitur
                mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.
                Quisque vitae sodales lectus, vel tristique risus faucibus.
              </div>
            </div>
            <Carouselteam />
          </div>
        </section>
        <section className='container-fluid black_more'>
          <div className='row m-10-hor'>
            <div className='col-md-3 slickteam'>
              <div className='slick-slide slick-col'>
                <div>
                  <div className='itm'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimony />
        <Footer />
      </div>
    </>
  )
}
