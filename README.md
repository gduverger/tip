Tip
===

Display *tooltip bubbles* below inputs to provide users with more information about that field.

Example
-------

	$("input#example").tip()
	
The command above will **append the following `div` after the input** (`#example`):

	<div data-for="example" class="tip" style="…">
		<div class="tip-content">…</div>
		<a class="tip-hide" href="#">Hide tips</a>
		<a class="tip-show" href="#">Show tips</a>
		<span class="tip-pointer"/>
	</div>

The text in `tip-content` will be **extracted from the `data-tip` attribute of the input** (`#example`).

You can use the *Hide tips* and *Show tips* links to `hide()` and `show()` the tip — the position is calculated automatically.