import { Grid, Text } from '@nextui-org/react'
import React from 'react'
import ProductCard from './ProductCard'

function Products() {
    return (
        <>
            <div className='mb-5'>
                <div
                    className="d-flex d-inline-block justify-content-center prod-text"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="400"
                >
                    <Text b size={50} >New&nbsp;</Text>
                    <Text b color='error' size={50}>Arrivals</Text>
                </div>
                <Grid.Container gap={2} justify="center" className='marProd mb-5'>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-out"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-out"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-out"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                    <Grid xs={8} sm={4} md={3} className='my-4 my-xs-5 my-sm-5 my-md-5 my-lg-5 '
                    data-aos="zoom-out"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        <ProductCard />
                    </Grid>
                </Grid.Container>
            </div>
        </>
    )
}

export default Products