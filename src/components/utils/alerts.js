import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: false
});

export function ErrorAlert () {
	Toast.fire({
		title: 'Error reaching Firebase',
		icon: 'error'
	});
}

export function SuccessAlert () {
	Toast.fire({
		title: 'Successfully submitted click',
		icon: 'success'
	});
}
