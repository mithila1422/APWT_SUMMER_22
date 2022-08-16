@extends('layout.app')
@section('title')
service </title>
<table class="table">
<tr>
    <th>Product Name</th>
    <th>Product Price</th>
    <th>Product ID</th>
</tr>
@foreach($products as $item)
<tr>
    <td>{{$item->name}}</td>
    <td>{{$item->price}}</td>
    <td>{{$item->code}}</td>
</tr>
@endforeach
</table>
@endsection