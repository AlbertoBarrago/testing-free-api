import * as React from 'react';
import {useEffect} from "react";
import {Grid, Pagination} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/system";

export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [element, setElement] = React.useState([]);


    const getPaginatedData = async (page: string, size: string) => {
        try {
            const res = await fetch(
                `https://api.punkapi.com/v2/beers?page=${page}&per_page=${size}`
            );
            const resp = await res.json();
            setElement(resp);
            // console.log(resp);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPaginatedData("1", "10").then(null);
    }, [])

    const handleChangePage = (
        event: any,
        newPage: number,
    ) => {
        getPaginatedData(newPage.toString(), "10").then(null);
        setPage(newPage);
    };

    const Element = (obj: any) => {
        return <Typography variant="subtitle1" gutterBottom className='text-black'>
                     {obj.element.brewers_tips}
              </Typography>;
    }


    return (

        <><Grid container
                padding={5}
                direction="row"
                className='bg-white'
                justifyContent="center"
                alignItems="center">
            <Grid item  maxHeight={500} height={500} xs={12} className='overflow-scroll'>
                {element.map((e, index) => {
                return <Element key={index} element={e}/>;
             })}
            </Grid>
            <Grid item xs={12}>
                <Stack alignItems="center" component='div'>
                    <Pagination className='mt-3' count={element.length} onChange={handleChangePage}/>
                </Stack>
            </Grid>
        </Grid>
        </>
    );
}