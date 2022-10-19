@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')



    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">@lang('admin.archive')</span>
        </div>

    </div>
    <!-- /breadcrumb -->

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">


                    {{--<a href="{{locale_route('user.create')}}" class="btn ripple btn-primary" type="button">@lang('admin.create_btn')</a>--}}
                    {{--<p class="tx-12 tx-gray-500 mb-2">Example of Nowa Simple Table. <a href="">Learn more</a></p>--}}
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <form class="mr-0 p-0">
                            <table class="table mg-b-0 text-md-nowrap">
                                <thead>
                                <tr>
                                    <th>@lang('admin.id')</th>
                                    <th>@lang('admin.type')</th>
                                    <th>@lang('admin.name')</th>
                                    <th>@lang('admin.email')</th>
                                    <th>@lang('admin.phone')</th>
                                    {{--<th>@lang('admin.status')</th>--}}
                                    <th>@lang('admin.created')</th>
                                    <th>@lang('admin.deleted')</th>
                                    <th>@lang('admin.deleted_by')</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td>
                                        <input class="form-control" type="number" name="id" onchange="this.form.submit()"
                                               value="{{Request::get('id')}}"
                                               class="validate {{$errors->has('id') ? '' : 'valid'}}">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="email" onchange="this.form.submit()"
                                               value="{{Request::get('email')}}"
                                               class="validate {{$errors->has('email') ? '' : 'valid'}}">
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                @if($data)
                                    @foreach($data as $user)
                                        <?php
                                        $type = 'Client';
                                        if($user->is_admin) $type = 'Admin';
                                        if($user->is_moderator) $type = 'Moderator';
                                        ?>

                                        <tr>
                                            <td>{{$user->id}}</td>
                                            <td>{{$type}}</td>
                                            <td>{{$user->profile?$user->profile->name:""}} {{$user->profile?$user->profile->surname:""}}</td>
                                            <td>{{$user->email}}</td>
                                            <td>{{$user->profile?$user->profile->phone:''}}</td>
                                            {{--<td>
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
                                            </td>--}}
                                            <td>{{$user->created_at}}
                                            </td>

                                            <td>{{$user->deleted_at}}
                                            <td>
                                                {!! $user->deletedBy->is_admin ? 'Admin':'<a href="'. route('moderator.edit',$user->deletedBy->id) .'">Moderator</a>' !!}
                                            </td>
                                            <td>

                                                {{--<a href="{{locale_route('user.edit',$user->id)}}"
                                                   class="pl-3">
                                                    <i class="fa fa-edit">edit</i>
                                                </a>--}}

                                                <a href="{{locale_route('archive.restore',$user->id)}}"
                                                   class="pl-3">
                                                    <i class="fa fa-save">restore</i>
                                                </a>
                                                {{--<a href="{{locale_route('archive.destroy',$user->id)}}"
                                                   onclick="return confirm('Are you sure?')" class="pl-3">
                                                    <i class="fa fa-trash">Delete</i>
                                                </a>--}}
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
