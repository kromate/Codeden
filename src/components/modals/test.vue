<template>
	<Modal :modal="$attrs.modal">
		<template #title>
			<div class="d-flex gap-2">
				<span>Buy Coins</span>
				<span class="ms-auto" style="font-size: 1rem;">
					<AccountCoinBalance :user="user" />
				</span>
			</div>
		</template>
		<div class="d-flex flex-column flex-md-row align-items-center">
			<div class="d-flex flex-column gap-1 flex-grow-1 w-100 border-lg p-1">
				<h5 class="headertext">
					Bronze
				</h5>
				<div
					v-for="option in BRONZE_PRICES"
					:key="option.amount"
					class="d-flex align-items-center gap-1"
					style="font-size: 1.5rem;"
				>
					<img :src="option.src" alt="" width="48">
					<DynamicText>{{ option.amount }}</DynamicText>
					<button
						:class="option.suggested ? 'btn-dark' : 'btn-primary'"
						class="btn ms-auto customStyle"
						@click="buyCoins(option, false)"
					>
						{{ getLocalCurrencySymbol() }}{{ getLocalAmount(option.price) }}
					</button>
				</div>
			</div>
			<div class="d-flex flex-column gap-1 flex-grow-1 w-100 p-1">
				<h5 class="headertext">
					Gold
				</h5>
				<div
					v-for="option in GOLD_PRICES"
					:key="option.amount"
					class="d-flex align-items-center gap-1"
					style="font-size: 1.5rem;"
				>
					<img :src="option.src" alt="" width="48">
					<DynamicText>{{ option.amount }}</DynamicText>
					<button
						:class="option.suggested ? 'btn-dark' : 'btn-primary'"
						class="btn ms-auto customStyle"
						@click="buyCoins(option, true)"
					>
						{{ getLocalCurrencySymbol() }}{{ getLocalAmount(option.price) }}
					</button>
				</div>
			</div>
		</div>
		<DisplayError :error="error" />
		<PageLoading v-if="loading" />
	</Modal>
</template>


<style  scoped>
	.headertext {
		margin: 0;
		font-weight: bold;
		font-size: 1.25rem;
	}

	.customStyle {
		border-radius: 10rem;
		font-size: 18px;
	}


</style>
