@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')



    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">@lang('admin.sessions')</span>
        </div>
         
    </div>
    <!-- /breadcrumb -->

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <form class="mr-0 p-0">
                            <table class="table mg-b-0 text-md-nowrap">
                                <thead>
                                <tr>
                                    <th>@lang('admin.email')</th>
                                    <th>@lang('admin.ip')</th>
                                    <th>@lang('admin.type')</th>
                                    <th>@lang('admin.last_activity')</th>

                                    <th>@lang('admin.actions')</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <th>

                                    </th>
                                    <th>

                                    </th>
                                    <th></th>


                                @if($data)
                                    @foreach($data as $item)
                                        <tr>
                                            <td>{{$item->user->email}}</td>
                                            <td>{{$item->ip_address}}</td>
                                            <td>{!! $item->user->is_moderator ? '<span style="color:red">moderator</span>' : '<span style="color:green">client</span>' !!}</td>
                                            <td>{{date('Y-m-d H:i:s',$item->last_activity)}}</td>


                                            </td>

                                            <td>


                                                <a href="{{locale_route('session.destroy',$item->id)}}"
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
