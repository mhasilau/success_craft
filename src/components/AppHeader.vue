<template>
	<header>
		<div class="logo">
			<img src="@/assets/logo.svg" alt="" class="logo-img" />
		</div>
		<nav>
			<button>HOME</button>
			<button>ABOUT US</button>
			<button>FRAMEWORKS</button>
			<button>APPLICATIONS</button>
			<button>CONTACT US</button>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>

<style>
header {
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	font-size: 18px;
}

.logo {
	text-align: center;
	align-self: center;
}

.logo-img {
	width: 197px;
	height: 38px;
}

nav {
	width: 70%;
	display: flex;
	flex-direction: row;
	justify-content: end;
	align-self: center;
}

button {
	margin: 0 10px;
	text-decoration: none;
	color: #3d3d3d;
}
</style>
