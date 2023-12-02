import { Flex, Link } from "@chakra-ui/react"


export const Navbar = () => {
	return (
		<Flex padding={'20px 0'} justifyContent={'center'} gap={'10px'}>
			<Link textTransform={'uppercase'} fontWeight={'bold'} color={'#222'} textDecoration={'none'} href="/posts">Posts page</Link>
			<Link textTransform={'uppercase'}  fontWeight={'bold'}  color={'#222'} textDecoration={'none'} href='/todos'>Todos page</Link>
		</Flex>
	)
}