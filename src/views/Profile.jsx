import React from 'react'
import { AppBar, Toolbar, Box, Typography, Avatar, Button, Container, TextField } from '@mui/material'
import Me from '../assets/much.jpg'
import Program from '../assets/program.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function ProfilePage() {
    return (
        <Box sx={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 6, fontSize: '22px', mr: 'auto', fontFamily: "Arial Narrow", fontWeight: 'bold', opacity: 0.8, letterSpacing: '-0.7px', }}>
                            PITIPONG CHANPLAENG
                        </Typography>
                        <Typography sx={{ fontSize: '16px',color: 'yellow'}}>
                            Work
                        </Typography >
                        <Typography sx={{ mx: 4, fontSize: '16px',color: 'grey' }}>
                            About
                        </Typography>
                        <Typography sx={{ mr: 4, fontSize: '16px', color: 'cyan'}}>
                            Contact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ ml: '8%', justifyContent: 'left', display: 'flex', mt: 8 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 8 }}>
                    <Typography sx={{ fontSize: '80px', color: 'white', fontFamily: "Arial Narrow", fontWeight: 'bold', lineHeight: '1' ,color: 'pink'}}>
                        HELLO !!!<br /> MY NAME IS <br />
                        <Typography sx={{fontSize: '80px', color: 'white', fontFamily: "Arial Narrow", fontWeight: 'bold', lineHeight: '1' ,color: 'gold'}}>PITIPONG CHANPLAENG</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: '18px', color: 'silver', mt: 3 }}>
                        A Frontend web developer from Thailand with a passion for designing <br />and developing user-friendly and accessible websites for everyone.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'yellowgreen', width: 180, height: 50, borderRadius: '30px', color: 'black', fontSize: '13px' }}>CONTACT ME <Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'lightblue', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'purple', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
                <Box sx={{ mx: 'auto' }} />
                <Avatar src={Me} variant='rounded' sx={{ width: 500, height: 550, borderRadius: '20px', mr: '8%' }}></Avatar>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 }}>
                <Typography sx={{ ml: 'auto', fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow',color: 'brown' }}>ABOUT ME</Typography>
                <Box sx={{ mx: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 'auto', mt: 2.5 }}>
                    <Typography sx={{ fontSize: '20px', opacity: 0.9 }}>
                        I am a Frontend web developer from Bangkok, currently<br /> seeking exciting new opportunities in the field. With an <br />educational background in software engineering, I am<br /> eager to learn and grow in this industry.</Typography>
                    <Typography sx={{ mt: 2, fontSize: '12px', opacity: 0.7 }}>
                        My goal is to create seamless digital experiences that enhance usabilityand inclusivity<br /> for all users. I strive to leverage the latest technologies and best practices to build<br /> websites that are not only visually appealing but also functional, efficient, and accessible<br /> to people of all abilities.I believe in the power of technology to bridge gaps and make<br /> the web a more inclusive space for everyone.🚀
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant="contained" sx={{ mt: 6, backgroundColor: 'red', width: 250, height: 50, borderRadius: '30px', color: 'black', fontSize: '15px' }}>DOWLOAD RESUME<Typography sx={{ ml: 3, fontSize: '10px', backgroundColor: 'transparent' }}>⚫</Typography></Button>
                        <Avatar sx={{ mx: 2, mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'lightblue', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>
                                in
                            </Typography>
                        </Avatar>
                        <Avatar sx={{ mt: 'auto', bgcolor: 'rgb(36, 34, 34)', width: 55, height: 55 }}>
                            <GitHubIcon sx={{ backgroundColor: 'transparent', color: 'purple', fontSize: '23px' }} />
                        </Avatar>
                    </Box >
                </Box>
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', mt: 6 }}>
                <Avatar alt='see' src={Program} variant='rounded' sx={{ width: '90%', height: 700, borderRadius: '20px' }}></Avatar>
            </Box>
            <Box sx={{ mt: 6 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8, ml: 5 }}>
                <Typography sx={{ ml: 'auto', fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow',color: 'blue' }}>MY CAPABILITIES</Typography>
                <Box sx={{ mx: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 'auto', mt: 2.5, ml: 20, pr: 10 }}>
                    <Typography sx={{ fontSize: '12px' }}>
                        I am always seeking opportunities to enhance my skills, both in front-end and<br /> back-end development, as well as UX/UI design and database management.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'red'}}>HTML</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'orange'}}>CSS</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '140px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'yellow'}}>JAVASCRIPT</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '120px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'green'}}>FLUTTER</Typography>
                        </Container>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'rgba(0, 136, 255, 0.85)'}}>DART</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '90px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'indigo'}}>IoT</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '100px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'violet'}}>REACT</Typography>
                        </Container>
                        <Container
                            sx={{
                                border: '1px solid white',
                                width: '120px',
                                height: '50px',
                                borderColor: 'rgb(77, 76, 76)',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{color: 'pink'}}>DATABASE</Typography>
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 ,pr: 14}}>
                <Typography sx={{ ml: 10, fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow',color: 'chocolate' }}>MY EXPERIENCE</Typography>
                <Box sx={{ mx: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 2.5, pl: 10}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>Freelancer Developer</Typography>
                        <Typography sx={{ fontSize: '13px', }}>NOV 2023 - Present</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '12px', opacity: 0.7 }}>
                        Developed and improved user interfaces for web applications using React<br />.js.
                        Collaborated with the UX/UI design team to create an impressive user<br /> experience.
                        Enhanced website loading speed through various optimization<br /> techniques.
                        Contributed  to the development and maintenance of internal <br />component libraries.
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial Narrow' }}>Front-End Intern</Typography>
                        <Typography sx={{ fontSize: '13px'}}>Sep 2023 - Nov 2023</Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '12px', opacity: 0.7 }}>
                    Developed client websites using HTML, CSS, and JavaScript, improving website<br /> accessibility to comply with WCAG standards. Collaborated with the back-end<br /> team to integrate APIs.
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ mt: 10 }}>
                <hr style={{ borderColor: 'rgb(77, 76, 76)', marginRight: '4%' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 8 }}>

                <Box display={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '70px', fontWeight: 'bold', fontFamily: 'Arial Narrow',color: 'rebeccapurple' }}>
                        LET's CONNECT
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>
                        Say hello at <u style={{ textDecorationColor: 'red' ,color: 'red'}}>S6419410030@sau.ac.th</u><br />
                        For more info, here's my <u style={{ textDecorationColor: 'orange',color: 'rgb(255, 175, 99)', }}>resume</u>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'lightblue', fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: '20px' }}>in</Typography>
                        <GitHubIcon sx={{ color: 'purple', mx: 3 }} />
                        <XIcon sx={{ color: 'white', mr: 3 }} />
                        <InstagramIcon sx={{ color: 'rgb(234, 0, 152)' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: '86%' }}>
                        <Typography>© 2025 PITIPONG CHANPLAENG</Typography>
                    </Box>
                </Box>

                <Box sx={{ mx: '100px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2.5, ml: 16 }}>
                    <Typography sx={{ mb: 1 }}>Name</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(250, 250, 250)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Email</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Subject</Typography>
                    <TextField sx={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px' }} />
                    <Typography sx={{ mb: 1, mt: 3 }}>Message</Typography>
                    <TextField multiline
                        rows={5} sx={{ width: '500px', backgroundColor: 'rgb(248, 248, 248)', borderRadius: '5px' }} />
                    <Button variant="contained" sx={{ mt: 6, backgroundColor: 'rgb(255, 255, 5)', width: 150, height: 50, borderRadius: '30px', color: 'black', fontSize: '18px' }}>SUBMIT</Button>
                </Box>
            </Box>
            <Box sx={{ height: '100px' }} />
        </Box>
    )
}
