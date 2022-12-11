using InformationCommunicationHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InformationCommunicationHub.Patterns
{
    public enum TokenRequestType
    {
        creation,
        change
    }

    class TokenRequestStorage : RequestStorage<Request>
    {
        public TokenRequestStorage(List<Request> requests) : base(requests)
        {

        }
        public override List<Request> GetContent()
        {
            return _content;
        }
    }

    abstract class RequestStorage<T>
    {
        protected List<T> _content { get; set; }

        public RequestStorage(List<T> content)
        {
            _content = content;
        }

        public abstract List<T> GetContent();
    }

    abstract class RequestsFiltered<T> : RequestStorage<T>
    {
        protected RequestStorage<T> storage;

        public RequestsFiltered(RequestStorage<T> request) : base(request.GetContent())
        {
            this.storage = request;
        }
    }

    class FilteredByUserId : RequestsFiltered<Request>
    {
        private int _userId;
        public FilteredByUserId(RequestStorage<Request> requests, int userId) : base(requests)
        {
            _userId = userId;
        }

        public void SetUserId(int userId)
        {
            _userId = userId;
        }

        public override List<Request> GetContent()
        {
            return storage.GetContent().Where(r => r.UserId == _userId).ToList();
        }
    }

    class FilteredByDate : RequestsFiltered<Request>
    {
        private DateTime? _low;
        private DateTime? _high;

        public FilteredByDate(RequestStorage<Request> requests, DateTime? low, DateTime? high) : base(requests)
        {
            _low = low;
            _high = high;
        }

        public override List<Request> GetContent()
        {
            var init = storage.GetContent();
            if (_low != null)
                init = init.Where(r => r.CreationDate.Value.Date >= _low.Value.Date).ToList();

            if (_high != null)
                init = init.Where(r => r.CreationDate.Value.Date <= _high.Value.Date).ToList();

            return init;
        }
    }


    class FilteredByRequestType : RequestsFiltered<Request>
    {
        private TokenRequestType _requestType;
        public FilteredByRequestType(RequestStorage<Request> requests, TokenRequestType requestType) : base(requests)
        {
            _requestType = requestType;
        }

        public void SetRequestType(TokenRequestType requestType)
        {
            _requestType = requestType;
        }

        public override List<Request> GetContent()
        {
            return storage.GetContent().Where(r => r.Comment == _requestType.ToString()).ToList();
        }
    }

}
