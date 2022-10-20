@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')



    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">@lang('admin.withdrawals')</span>
        </div>

    </div>
    <!-- /breadcrumb -->

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">
                    {{--<a href="{{locale_route('currency.create')}}" class="btn ripple btn-primary" type="button">@lang('admin.createbutn')</a> --}}
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <form class="mr-0 p-0">
                            <table class="table mg-b-0 text-md-nowrap">
                                <thead>
                                <tr>
                                    <th>@lang('admin.id')</th>
                                    <th>@lang('admin.user')</th>
                                    <th>@lang('admin.amount')</th>
                                    <th>@lang('admin.method')</th>
                                    <th>@lang('admin.verify')</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <th>
                                        <input class="form-control" type="number" name="id" onchange="this.form.submit()"
                                               value="{{Request::get('id')}}"
                                               class="validate {{$errors->has('id') ? '' : 'valid'}}">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" name="email" onchange="this.form.submit()"
                                               value="{{Request::get('email')}}"
                                               class="validate {{$errors->has('email') ? '' : 'valid'}}">
                                    </th>
                                    <th></th>

                                <?php
                                  $statuses = [
                                      0 => 'not_verify',
                                      1 => 'verify',
                                      2 => 'pending',
                                      3 => 'approved',
                                      4 => 'rejected',
                                      5 => 'canceled',
                                      6 => 'manual check',
                                      7 => 'under review',
                                      8 => 'processing'
                                  ]
                                ?>


                                @if($data)
                                    @foreach($data as $item)
                                        <tr>
                                            <td>{{$item->id}}</td>
                                            <td>{{$item->user->email}} {{$item->user->name}}</td>
                                            <td>{{$item->amount}}</td>
                                            <td>{{$item->method}}</td>
                                            <td>{{$statuses[$item->status]}}</td>
                                            <td>

                                                <a href="{{locale_route('withdraw.edit',$item->id)}}"
                                                   class="pl-3">
                                                    <i class="fa fa-edit">Edit</i>
                                                </a>
                                                    <a href="{{locale_route('withdraw.destroy',$item->id)}}"
                                                       onclick="return confirm('Are you sure?')" class="pl-3">
                                                        <i class="fa fa-edit">Delete</i>
                                                    </a>
                                            </td>

                                        </tr>
                                    @endforeach
                                @endif


                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--/div-->

        {{ $data->appends(request()->input())->links('admin.vendor.pagination.material') }}
    </div>
    <!-- /row -->

@endsection

@section('scripts')



@endsection
