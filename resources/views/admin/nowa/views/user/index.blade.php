@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')



    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">@lang('admin.users')</span>
        </div>

    </div>
    <!-- /breadcrumb -->

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">


                    <a href="{{locale_route('user.create')}}" class="btn ripple btn-primary" type="button">@lang('admin.create_btn')</a>
                    {{--<p class="tx-12 tx-gray-500 mb-2">Example of Nowa Simple Table. <a href="">Learn more</a></p>--}}
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <form class="mr-0 p-0">
                            <table class="table mg-b-0 text-md-nowrap">
                                <thead>
                                <tr>
                                    <th>@lang('admin.unicid')</th>
                                    <th>@lang('admin.name')</th>
                                    <th>@lang('admin.email')</th>
                                    <th>@lang('admin.phone')</th>
                                    <th>@lang('admin.email_verified')</th>
                                    <th>@lang('admin.status')</th>
                                    <th>@lang('admin.date')</th>
                                    <th>@lang('admin.tfi')</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <th>
                                        <input class="form-control" type="text" name="unique_id" onchange="this.form.submit()"
                                               value="{{Request::get('unique_id')}}"
                                               class="validate {{$errors->has('unique_id') ? '' : 'valid'}}">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" name="name" onchange="this.form.submit()"
                                               value="{{Request::get('name')}}"
                                               class="validate {{$errors->has('name') ? '' : 'valid'}}">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" name="email" onchange="this.form.submit()"
                                               value="{{Request::get('email')}}"
                                               class="validate {{$errors->has('email') ? '' : 'valid'}}">
                                    </th>
                                    <th>
                                        <input class="form-control" type="number" name="phone" onchange="this.form.submit()"
                                               value="{{Request::get('phone')}}"
                                               class="validate {{$errors->has('phone') ? '' : 'valid'}}">
                                    </th>


                                @if($data)
                                    @foreach($data as $user)
                                        <tr>
                                            <td>IXIA1A{{{$user->unique_id}}}</td>
                                            <td>{{$user->profile?$user->profile->name:""}} {{$user->profile?$user->profile->surname:""}}</td>
                                            <td>{{$user->email}}</td>
                                            <td>{{$user->profile?$user->profile->phone:''}}</td>
                                            <td>
                                                @if($user->email_verified_at)
                                                    <div class="alert alert-success" role="alert">
                                                        <span class="alert-inner--icon"><i class="fe fe-thumbs-up"></i></span>
                                                        <span class="alert-inner--text"><strong>Verified!</strong> {{$user->email_verified_at}}</span>
                                                    </div>
                                                @else
                                                    <div class="alert alert-warning" role="alert">
                                                        <span class="alert-inner--icon"><i class="fe fe-info"></i></span>
                                                        <span class="alert-inner--text"><strong>Warning!</strong> email not verified!</span>
                                                    </div>
                                                @endif
                                            </td>
                                            <td>
                                                @if($user->status == 'approved')
                                                <div class="alert alert-success" role="alert">
                                                    <span class="alert-inner--icon"><i class="fe fe-thumbs-up"></i></span>
                                                    <span class="alert-inner--text"><strong>Approved!</strong> </span>
                                                </div>
                                                @elseif($user->status == 'rejected')
                                                    <div class="alert alert-danger" role="alert">
                                                        <span class="alert-inner--icon"><i class="fe fe-info"></i></span>
                                                        <span class="alert-inner--text"><strong>Rejected!</strong></span>
                                                    </div>
                                                @else
                                                    <div class="alert alert-warning" role="alert">
                                                        <span class="alert-inner--icon"><i class="fe fe-info"></i></span>
                                                        <span class="alert-inner--text"><strong>Waiting!</strong></span>
                                                    </div>
                                                @endif
                                            </td>
                                            <td>{{$user->created_at}}
                                            </td>

                                            @if ($user->google2fa_secret)
                                            <td>
                                                <a class="btn btn-danger" href={{route("user.tfi",$user->id) }}>disable</a>
                                            </td>
                                            @else
                                            <td>
                                                <a class="btn btn-danger disabled" href={{route("user.tfi",$user->id) }}>disabled</a>
                                            </td>
                                            @endif




                                            <td>

                                                <a href="{{locale_route('user.edit',$user->id)}}"
                                                   class="pl-3">
                                                    <i class="fa fa-edit">Edit</i>
                                                </a>
                                                <a href="{{locale_route('user.destroy',$user->id)}}"
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
